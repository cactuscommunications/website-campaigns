export interface IServiceInformationRuby {
    heading?: string;
    subHeading?: string;
    infoCard: ICardInfo[]
    path: string
    CTAtext: string ,
    searchText : string
  }

  export interface IServiceInfo {
    path:  string,
    text: string,
  }

  export interface ICardInfo {
    baseService: string;
    path: string,
    heading: IHeading;
    desc: string;
    benefit: IBenefit;
    listHeading: string;
    list: IServiceInfoList[]
    pricing: IPricing;
  }  
    
    export interface IServiceInfoList {
      path: string;
      text: string;
      color?: boolean;
    }

    export interface IHeading {
      heading: string;
      specialHeadingText: string;
      headingClassName: string;
      subHeadingClass: string;
      comment: string;
      path: string
    }
    export interface IBenefit {
        text: string
        className: string
        path:string
    }
    export interface IPricing {
      path1: string;
      path2: string;
      path3: string;
      wordCount: string;
      days: string;
      text: string;
      disclaimer: string;
      price: string;
      word: string;
      tax: string;
      CTAdetails: string;
      ctaLink?: string;
      link?: string;
    }

export interface IServiceInfoList {
    path: string;
    text: string;
}
 
