// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import NxWelcome from './nx-welcome';
import './../../scss/theme.scss';
import SubjectArea from './pages/subject-area';
import RenderComponents from "./services/renderer/renderer";
import strapiAPIService from '../app/services/api/strapi-api';

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  useParams,
} from "react-router-dom";
import ThankYou from './pages/thank-you';
import Header from './components/header/header';
import SubjectAreaBannerRuby from './components/subject-area-banner-ruby/subject-area-banner-ruby';
import { IComponent } from './services/renderer/render.model';
import pageService from './services/renderer/page-service';
// @ts-ignore
import { Helmet } from "react-helmet";


const AppWrapper = () => {
  const [data, updateData] = useState([{}]);
  const [metaData, updateMetaData] = useState({ title: '', description: '' });
  useEffect(() => {
    const getData = async () => {
      const resp = await getPageData();
      updateMetaData(resp.meta);
      let pageObj: IComponent[] = [];
      pageObj.push({
        element: 'header',
        weight: 0,
        params: {},
        searchText: "default" //TODO remove after updating ocmponent param
      })
      resp.page.map((page: any) => {
        pageObj.push({
          element: page.element.machineName,
          weight: page.weight,
          params: page.params,
          searchText: "default" //TODO remove after updating ocmponent param
        })
      })
      pageObj.push({
        element: 'footer',
        weight: 100,
        params: {},
        searchText: "default" //TODO remove after updating ocmponent param
      })
      pageObj.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
      updateData(pageObj);
    }
    getData();
  }, []);

  return <>
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
    </Helmet>
    {data && data.map(config => RenderComponents(config))}
  </>
}

function getPageData() {
  let partner = pageService.getPartner();
  let pageRoute = pageService.getRoute();
  let country = pageService.getCountry();
  return strapiAPIService.getPage({ route: pageRoute, country: country, partner: partner }).then(function (response: any) {
    let returnData = { page: [], meta: { title: '', description: '' } };
    returnData.page = response?.data?.data[0]?.attributes?.pageModel ? response.data?.data[0]?.attributes?.pageModel : [];
    returnData.meta = {
      title: response?.data?.data[0]?.attributes?.metaTitle ? response?.data?.data[0]?.attributes?.metaTitle : '',
      description: response?.data?.data[0]?.attributes?.metaDescription ? response?.data?.data[0]?.attributes?.metaDescription : '',
    }
    return returnData;
  });
}

export default AppWrapper;
