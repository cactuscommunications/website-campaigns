import React from 'react';

interface ILapisFeatures {
  title: string;
  content: string;
  contactLink?: {
    content?: string;
    route?: string;
  };
  imagePath: string;
  smallImage?: string;
  services?: IServicesContent;
  link?: {};
}
interface IServicesContent {
  title: string;
  list: { content: string }[];
  link: string;
  linkText: string;
}
export function FeatureLapis({ feature, position }: { feature: ILapisFeatures; position: String }) {
  return (
    <div
      className={
        ' mx-2.5 bg-white sm:w-full sm:float-left sm:mx-0 sm:mb-3' +
        (position === 'right'
          ? 'w-75 mb-8 border rounded-lg shadow p-7.5 sm:w-full sm:mb-5'
          : ' w-80 p-8 text-center rounded sm:w-full sm:pb-2 sm:last:pb-8')
      }
    >
      <div className={' mb-4' + (position === 'right' ? 'float-left w-full' : 'flex justify-center')}>
        <span
          style={{
            backgroundImage: `url(${feature.imagePath})`,
          }}
          className={
            'self-center ' +
            feature?.imagePath +
            ' ' +
            (!feature?.smallImage
              ? position === 'right'
                ? 'w-1/4 float-right text-right h-16 inline-block bg-no-repeat bg-contain sm:w-1/5 sm:h-12'
                : 'w-10 h-8 inline-block bg-no-repeat bg-contain mr-4'
              : '')
          }
        ></span>
        {feature?.smallImage && (
          <span
            style={{
              backgroundImage: `url(${feature.smallImage})`,
            }}
            className="w-10 h-10 float-right inline-block bg-no-repeat bg-contain"
          ></span>
        )}
        {/* <app-markdown>  */}
        <h4
          className={
            position === 'right'
              ? 'w-3/4 float-left leading-6 font-ssb text-xl sm:4/5'
              : 'text-pearl-beta font-sb inline-block' + ' self-center'
          }
        >
          {feature?.title}
        </h4>
        {/* </app-markdown> */}
      </div>
      <div className="clearfix"></div>
      <p className="text-black/70 + (position === 'right' ? 'text-xsm mt-4 leading-6' : 'text-sm font-ssb')">
        {feature?.content}
      </p>
      {feature?.contactLink && (
        <a className="text-underline-hover " href={feature.contactLink.route}>
          <span className="text-sm font-ssb text-pearl-beta">
            {feature?.contactLink?.content}
          </span>
        </a>
      )}

      {feature?.services && <p className="text-sm font-ssb uppercase tracking-wider">{feature?.services?.title}</p>}
      {feature?.services && (
        <ul>
          {(feature?.services?.list).map((item) => (
            <React.Fragment>
              <ol>{item.content}</ol>
            </React.Fragment>
          ))}
        </ul>
      )}
      {feature?.services && <p>{feature?.services?.linkText}</p>}
      {feature?.link && (
        <div className="mt-4">
          {/* <app-lynk [params]="params?.link" class="text-underline-hover">
                    <app-markdown>
                    <span
                    className="text-xsm font-ssb text-pearl-beta relative inline-block">{{ feature?.link.content }}</span>
                    </app-markdown>
                </app-lynk> */}
        </div>
      )}
    </div>
  );
}

export default FeatureLapis;
