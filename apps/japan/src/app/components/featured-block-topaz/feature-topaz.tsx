/**
 * Types for ITopazFeatureCards
 * @author Goutham Reddy.
 */
interface ITopazFeatureCards {
  heading?: string;
  logo: Ilogo[];
  content?: string;
  link?: { content?: string };
}

/**
 * Logos of Ilogo
 * @author Goutham Reddy.
 */
interface Ilogo {
  logoPath: string;
}

export function FeatureTopaz({
  card,
  lastElement,
  cardCount,
}: {
  card: ITopazFeatureCards;
  lastElement: boolean;
  cardCount: number;
}) {
  return (
    <div
      className={
        card.logo
          ? 'w-1.8/6 first:w-0.7/2 last:w-0.7/2 border-r border-r-ruby-gamma last:border-r-0 sm:border-none sm:first:w-full sm:last:w-full sm:w-full'
          : 'w-67.5 mr-12 last:mr-0 border-r border-r-ruby-gamma last:border-r-0 sm:border-none'
      }
    >
      {card?.logo && (
        <div className="text-center float-left sm:px-6 sm:mb-4 sm:w-full">
          <h4 className="text-pearl-beta font-sb mb-4 text-base">{card?.heading}</h4>
          <div className={!lastElement ? 'relative sm:border-b' : 'relative'}>
            {card.logo.map((logo) => (
              <span
                className="inline-block w-20.75 h-6.5 m-3 bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: `url(${logo.logoPath})`,
                }}
              ></span>
            ))}
          </div>
        </div>
      )}
      {card?.content && (
        <div>
          <div className={(lastElement ? 'pr-4' : 'pr-10') + ' relative w-full'}>
            <p className="font-sb mb-2">{card?.heading}</p>
            <span className="text-ruby-beta block leading-18 mb-2 text-xsm">{card?.content} </span>
            <div className="clearfix"></div>
            {/* <app-lynk [params]="card?.link" class=" text-underline-hover">
                            <span className="text-pearl-beta text-sm inline-block">{card?.link?.content}</span>
                            </app-lynk> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatureTopaz;
