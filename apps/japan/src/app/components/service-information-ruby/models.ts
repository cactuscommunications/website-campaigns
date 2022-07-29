export interface IServiceInformationRuby {
    heading?: string;
    subHeading?: string;
    card: ICardInfo[]
    path: string
    CTAtext: string 
  }

  export interface IServiceInfo {
      path:  string,
      text: string
  }

  export interface ICardInfo {
    path:  string,
    heading: IHeading;
    desc: string;
    benefit: IBenefit;
    listHeading: string;
    list:IServiceInfoList[]
    pricing: IPricing;
    }  
    
    export interface IServiceInfoList {
        
        path: string;
        text: string;
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
        wordCount: string;
        days: string;
        text: string;
        disclaimer: string;
        price: string;
        word: string;
        tax: string;
        CTAdetails: string;

    }

export interface IServiceInfoList {
    path: string;
    text: string;
}
 
