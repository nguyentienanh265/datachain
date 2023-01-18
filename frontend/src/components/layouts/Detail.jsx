const Detail = () => {
  return (
    <div className="flex flex-row items-center w-full h-[70vh]">
      {/* Image */}
      <div className="flex-2 mr-4 h-full w-full">
        <img
          className="w-full h-full object-cover rounded-lg border-8 border-[#FFE400]"
          src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="Image"
        />
      </div>

      {/* Info and License */}
      <div className="flex-1 h-full w-full bg-white rounded-lg flex flex-col items-start">
        {/* Info */}
        <div className="flex-2 flex flex-col items-start w-full px-4 py-2">
          <h1 className="w-full text-center font-bold text-3xl text-[#333] mb-4 mt-2">
            Info
          </h1>

          {/* Rows */}
          <div className="w-full flex flex-row items-center">
            <p className="flex-1 w-full text-left text-[#333] font-semibold text-lg mr-2">
              Title
            </p>
            <input
              className="flex-3 w-full text-[#333] font-normal text-lg px-2 py-1.5 bg-[#f3f3f3] rounded-md outline-none"
              type="text"
              placeholder="Here is the title"
            />
          </div>

          <div className="w-full flex flex-row items-center mt-2">
            <p className="flex-1 w-full text-left text-[#333] font-semibold text-lg mr-2">
              Time
            </p>
            <input
              className="flex-3 w-full text-[#333] font-normal text-lg px-2 py-1.5 bg-[#f3f3f3] rounded-md outline-none"
              type="text"
              placeholder="20/12/2022 12:24:21"
            />
          </div>

          <div className="w-full flex flex-row items-start mt-2">
            <p className="flex-1 w-full text-left text-[#333] font-semibold text-lg mr-2">
              Desc
            </p>
            <textarea
              rows="4"
              className="flex-3 w-full text-[#333] font-normal text-lg px-2 py-1.5 bg-[#f3f3f3] rounded-md outline-none"
              type="text"
            >
              Here is the description for the image
            </textarea>
          </div>

          <div className="w-full flex flex-row items-center mt-4">
            <button className="flex-1 bg-[#3367EE] hover:bg-[#2256dd] font-semibold text-xl text-white px-4 py-2 rounded-lg mx-2">
              Update
            </button>
            <button className="flex-1 bg-[#FF1700] hover:bg-[#ee0600] font-semibold text-xl text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>
        </div>

        {/* License */}
        <div className="flex-1 flex flex-col items-start w-full px-4 py-2">
          <h1 className="w-full text-center font-bold text-3xl text-[#333] mb-4 mt-2">
            License
          </h1>

          {/* Rows */}
          <div className="w-full flex flex-row items-center">
            <p className="flex-1 w-full text-left text-[#333] font-semibold text-lg mr-2">
              Owner
            </p>
            <p className="flex-3 w-full text-[#333] font-normal text-lg px-2 py-1.5 bg-[#f3f3f3] rounded-md outline-none">
              No one owned this image
            </p>
          </div>

          {/* <button className="w-full mt-4 py-2 light-shadow rounded-lg bg-white glow-on-hover-square">
            <p className="text-transparent text-xl font-semibold">
                Get license now
            </p>
          </button> */}

          <button
            className="w-full mt-4 bg-[#EE079E] hover:bg-[#dd057c] font-semibold text-xl text-white px-4 py-2 rounded-lg"
            data-bs-toggle="modal"
            data-bs-target="#licensebox"
          >
            Get license now
          </button>

          <div
            class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="licensebox"
            tabindex="-1"
            aria-labelledby="exampleModalCenterTitle"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-md modal-dialog-centered relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="w-full text-center font-bold text-xl text-[#333] -mb-2"
                    id="exampleModalScrollableLabel"
                  >
                    License info
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4">
                  <div className="w-full flex flex-row items-center">
                    {/* Image */}
                    <div className="flex-1 mr-4">
                      <img
                        className="w-full h-[20vh] object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt="Image"
                      />
                    </div>

                    {/* License info */}
                    <div className="flex-1 w-full h-[20vh] flex flex-col justify-center items-center">
                      {/* Rows */}
                      <div className="w-full flex flex-row items-center">
                        <p className="flex-1 w-full text-left text-[#333] font-semibold text-sm mr-2">
                          ID
                        </p>
                        <p className="cursor-pointer flex-3 w-full text-right text-[#333] font-normal text-sm pl-2 py-1.5 rounded-md outline-none">
                          oinadi9qwe91
                        </p>
                      </div>

                      <div className="w-full flex flex-row items-center">
                        <p className="flex-1 w-full text-left text-[#333] font-semibold text-sm mr-2">
                          Owner
                        </p>
                        <p className="cursor-pointer flex-3 w-full text-right text-[#06FF00] font-normal text-sm pl-2 py-1.5 rounded-md outline-none">
                          No one owned
                        </p>
                      </div>

                      <div className="w-full flex flex-row items-center border-t border-gray-200 rounded-b-md">
                        <p className="flex-1 w-full text-left text-[#333] font-semibold text-sm mr-2">
                          Balance
                        </p>
                        <p className="flex-3 w-full text-right text-[#333] font-normal text-sm pl-2 py-1.5 rounded-md outline-none">
                          0.19999999 ETH
                        </p>
                      </div>

                      <div className="w-full flex flex-row items-center">
                        <p className="flex-1 w-full text-left text-[#333] font-semibold text-sm mr-2">
                          Price
                        </p>
                        <p className="flex-3 w-full text-right text-[#333] font-normal text-sm pl-2 py-1.5 rounded-md outline-none">
                          0.00012 ETH
                        </p>
                      </div>

                      <div className="w-full flex flex-row items-center border-t border-gray-200 rounded-b-md">
                        <p className="flex-1 w-full text-left text-[#333] font-semibold text-sm mr-2">
                          Balance
                        </p>
                        <p className="flex-3 w-full text-right text-[#333] font-normal text-sm pl-2 py-1.5 rounded-md outline-none">
                          0.19987999 ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    class="w-[150px] bg-[#999] hover:bg-[#888] font-semibold text-base text-white px-2 py-1.5 rounded-md"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="w-[150px] ml-2 bg-[#EE079E] hover:bg-[#dd057c] font-semibold text-base text-white px-2 py-1.5 rounded-md"
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
