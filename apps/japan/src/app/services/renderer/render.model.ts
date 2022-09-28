export interface IComponent {
    /**
     * The element field is fetched in this fashion because this is a many-to-many relation
     * between page & page_element with additional data stored in page_model table
     */
    element: string;
    weight: number;
    params?: {};
    searchText? : string;
  }
  /**
 * Actual element structure's meta data.
 * @author Goutham Reddy
 */
interface IPageElement {
    machineName: string;
  }

  export interface IMap {
    [key: string]: any;
  }