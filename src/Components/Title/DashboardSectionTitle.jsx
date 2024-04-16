import * as colors from '../../Constants/Colors/Colors';

const DashboardSectionTitle = ({ title, description='' }) => {
    return(
        <div className='w-fit flex bg-white sectionTitle py-2 px-5 flex-col rounded-md my-4'>
            <span className='text-[17px] text-gray-700 font-semibold'>{title}</span>
            <span className='text-[12px] text-gray-500 font-semibold'>{description}</span>
        </div>
    )
}

export default DashboardSectionTitle;
