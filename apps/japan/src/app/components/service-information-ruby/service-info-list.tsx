import MarkDown from '../markdown/markdown';
interface IServiceInfo {
    path:  string,
    text: string
}

export function ServiceInfoList({ list }: { list: IServiceInfo }) {
  return (
    <li className="mb-4 sm:mb-2.5 flex items-center">
      <span className="h-4 w-4 inline-block bg-no-repeat bg-contain mr-3 sm:mr-2 mt-1 sm:mt-0 flex-shrink-0"
        style={{ backgroundImage: `url(${list.path})`, }}></span>
      <span className="inline-block text-base sm:text-sm sm:leading-4 text-ruby-alpha font-sb">
        <MarkDown data={list.text}></MarkDown>
      </span>
    </li>         
  );
}

export default ServiceInfoList;
