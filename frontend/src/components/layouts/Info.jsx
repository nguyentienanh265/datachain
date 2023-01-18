import { useState } from 'react'
import ImageTag from "../widgets/ImageTag"

const imageList = [
    {
        id: 1,
        url: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
        title: 'Background 1',
        description: 'This is Background 1 This is Background 1 This is Background 1 This is Background 1',
        license: 'owned'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        title: 'Background 2',
        description: 'This is Background 2',
        license: 'not_owned'
    },
    {
        id: 3,
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*',
        title: 'Background 3',
        description: 'This is Background 3',
        license: 'not_owned'
    },
    {
        id: 4,
        url: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg',
        title: 'Background 4',
        description: 'This is Background 4',
        license: 'other_owned'
    },
    {
        id: 5,
        url: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
        title: 'Background 1',
        description: 'This is Background 1 This is Background 1 This is Background 1 This is Background 1',
        license: 'owned'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        title: 'Background 2',
        description: 'This is Background 2',
        license: 'not_owned'
    },
    {
        id: 7,
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*',
        title: 'Background 3',
        description: 'This is Background 3',
        license: 'not_owned'
    },
    {
        id: 8,
        url: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg',
        title: 'Background 4',
        description: 'This is Background 4',
        license: 'other_owned'
    }
]

const Info = () => {
    const [ images, setImages ] = useState(imageList)

    return (
        <div className='w-full flex flex-col items-center justify-start h-[75vh]'>
            {/* Filter */}
            <div className='w-full mb-4 flex flex-row justify-between items-center'>
                {/* Title */}
                <h1 className='text-white underline font-bold text-[1.75rem]'>Storage</h1>

                {/* Filter list */}
                <div className='flex flex-row justify-between items-center'>
                    
                    {/* License */}
                    <span className='flex flex-row justify-between items-center mr-8'>
                        <label className='text-semibold text-lg text-white mr-2'>License</label>
                        <select defaultValue='default' className='
                            form-select appearance-none
                            block
                            w-36
                            px-3
                            py-1
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded-md
                            transition
                            ease-in-out
                            m-0
                            outline-none
                        '>
                            <option value="default">Not selected</option>
                            <option value="owned">Owned</option>
                            <option value="not_owned">Not owned</option>
                            <option value="other_owned">Other owned</option>
                        </select>
                    </span>

                    {/* Sort */}
                    <span className='flex flex-row justify-between items-center'>
                        <label className='text-semibold text-lg text-white mr-2'>Sort</label>
                        <select defaultValue='latest' className='
                            form-select appearance-none
                            block
                            w-36
                            px-3
                            py-1
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded-md
                            transition
                            ease-in-out
                            m-0
                            outline-none
                        '>
                            <option value="latest">Latest</option>
                            <option value="earliest">Earliest</option>
                        </select>
                    </span>
                </div>
            </div>

            {/* Display list */}
            <div className='scrollbar overflow-y-scroll w-full flex flex-row flex-wrap items-center justify-between'>
                {images.map(
                    (image) => (<ImageTag key={image.id} image={image} />)
                )}
            </div>

            {/* Page number */}
            <div className="flex justify-center w-full rounded px-3 py-1 bg-[#ffffff40]">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">Previous</a></li>
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">1</a></li>
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">2</a></li>
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">3</a></li>
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">4</a></li>
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">5</a></li>
                        <li className="page-item mr-1"><a
                            className="page-link font-semibold text-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-[#333] hover:bg-white focus:shadow-none"
                            href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Info