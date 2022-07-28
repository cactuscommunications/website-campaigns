import { MarkDown } from '../markdown/markdown';
const ModalPearl = ({ closeModal, comment, subject }: { closeModal: any, comment: string; subject: string }) => {
  const closeIcon = 'assets/images/icons/close.svg'
  return (
    <>
      <div className="overlay flex flex-col fixed top-0 bottom-0 left-0 right-0 items-center justify-center z-10 bg-black/70">
        <div  className="relative">
          <button
            className="button float-right relative top-8 right-10 z-10 focus:outline-none sm:right-4.75"
            onClick={(e) => closeModal(false)}
          >
            <span className="w-3 h-3 float-right inline-block bg-no-repeat bg-cover" style={{backgroundImage: `url(${closeIcon})`}}></span>
          </button>
          <div className="clearfix"></div>
          <section className="bg-white rounded-lg border border-lapis-epsilon p-1 ng-star-inserted">
            <div className="w-232.5 max-h-90vh overflow-y-auto custom-scroll py-12 sm:w-full sm:py-6 md:py-6 md:w-184.5 flex sm:block md:block">
              <div className="float-left flex flex-wrap w-full px-14 border-none md:px-7.5">
                <div className="my-auto flex sm:text-center md:text-center">
                  {/* <h2 className="text-2xl mb-5 ng-star-inserted"> Motivated because of Editage </h2> */}
                </div>
                  <p className="leading-6 text-ruby-alpha font-pr text-sm sm:text-xsm sm:normal sm:leading-6 ng-star-inserted">
                    <MarkDown data={comment}></MarkDown>
                  </p>
                <h6 className="mt-7.5 ng-star-inserted"><span className="font-pr text-xsm">{ subject }</span>
                  <span className="font-pb text-xsm"></span>
                </h6>
              </div>
              <div className="clearfix"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};


export default ModalPearl;