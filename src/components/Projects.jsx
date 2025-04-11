import '../utilities/Card.css'
import { CardGalaxy } from '../mui-treasury/card-galaxy/CardGalaxy';
import metaData from './Project.json'

const Projects = () => {
    return (
        <div id='project' className='flex min-h-fit items-start justify-center bg-neutral-00 pb-6'>
            <div className="h-auto w-full bg-ed-300 mt-4 mb-4 md:w-[40rem] bg-red-00">
                <div className="h-8 w-fit bg-ed-300 px-2 mx-0 py-1 bg-yellow-00">
                    <h2 className='text-[#292929] text-lg font-semibold'>Projects</h2>
                </div>


                {/* Card Container  */}
                <div className="hidden translate-y-4 pl-2 pr-2 py-1 mb-2 mx-auto bg-neutral-00 w-full h-auto sm:flex md:flex lg:flex flex-col overflow-auto justify-start scrollbar-hide">
                    {/* Card 1 */}
                    <div className='flex gap-[1rem] cursor-pointer'>
                        <CardGalaxy data={metaData}/>
                    </div>
                </div>

                {/* Mobile View  */}
                <div className="translate-y-6 pl-2 pr-2 py-1 mb-2 mx-auto bg-neutral-00 w-full h-auto flex overflow-auto justify-start md:hidden lg:hidden">
                    {/* Card 1 */}
                    <div className='flex scrollbar-hide gap-[2rem] cursor-pointer'>
                    <CardGalaxy data={metaData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
