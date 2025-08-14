import profile from '../../assets/images/profile.png'

const header = () => {
    return (
        <header className='flex items-center justify-between p-10 mx-5 border-b-2'>
            <h1 className='text-4xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default header;