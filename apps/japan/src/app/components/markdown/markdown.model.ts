
  
  /**
   * Format Tags definition
   */
  export interface IMarkDown {
    singleTag: boolean;
    properties: boolean;
    name: string;
    startTag: string;
    endTag?: string;
  }
  
  export const MARKDOWN: IMarkDown[] = [
    {
      singleTag: true,
      properties: false,
      name: 'break',
      startTag: '<br />',
    },
    {
      singleTag: false,
      properties: false,
      name: 'bold',
      startTag: '<span class="font-sb">',
      endTag: '</span>',
    },
    {
      singleTag: false,
      properties: false,
      name: 'strike',
      startTag:
        '<span class="relative content after:absolute after:w-full after:h-0.5 after:left-0 after:right-0 after:top-0 after:transform">',
      endTag: '</span>',
    },
    {
      singleTag: false,
      properties: false,
      name: 'custom',
      startTag: '<span class="">',
      endTag: '</span>',
    },
    {
      singleTag: false,
      properties: false,
      name: 'underline',
      startTag: '<span class="">',
      endTag: '</span>',
    },
    {
      singleTag: true,
      properties: false,
      name: 'iThenticate',
      startTag:
        '<span class="w-21 h-5 bg-contain bg-no-repeat inline-block mx-2 flex-shrink-0 align-text-bottom" style="background-image: url(\'/assets/images/ithenticate-logo.png\');"></span>',
    },
    {
      singleTag: false,
      properties: true,
      name: 'link',
      startTag: '<a class="font-sb fs-inherit">',
      endTag: '</a>',
    },
    {
      singleTag: false,
      properties: true,
      name: 'image',
      startTag: '<img class="">',
      endTag: '</img>',
    },
    {
      singleTag: false,
      properties: false,
      name: 'striketag',
      startTag: '<strike class="" style="color:red">',
      endTag: '</strike>',
    },
    {
      singleTag: false,
      properties: false,
      name: 'underlinetag',
      startTag: '<u class="" style="color:red">',
      endTag: '</u>',
    },
  ];
  