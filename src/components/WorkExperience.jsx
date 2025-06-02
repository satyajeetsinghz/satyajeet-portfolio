import CertificateCard from "../utilities/CertificateCard"

const WorkExperience = () => {
    return (
        <div id="work" className="flex min-h-fit items-start justify-center mb-8 sm:mt-2">
            <div className='h-auto w-full bg-ed-300 mt-4 mb-4 mx-auto md:w-[40rem] bg-red-00'>
                <h2 className="mb-5 mx-2 text-lg font-semibold text-[#292929]">
                    Certification
                </h2>
                <CertificateCard />
            </div>
            {/* <!-- End Timeline --> */}
        </div>
    )
}

export default WorkExperience
