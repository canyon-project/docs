export default {
    logo:
        <div className={'flex hover:nx-opacity-75 items-center'} onClick={()=>{
            window.location.href = '/'
        }}>
        <img src="/logo.svg" style={{width:'32px'}} alt=""/>
        <span className={'mx-2 font-extrabold hidden md:inline select-none'}>CANYON</span>
        <span className={'text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap'}>JavaScript code coverage solution</span>
    </div>,
    project: {
        link: 'https://github.com/shuding/nextra'
    }
    // ... other theme options
}