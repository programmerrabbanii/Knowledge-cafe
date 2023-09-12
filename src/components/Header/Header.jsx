import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-start px-9 py-2 border-b-2 max-w-6xl mx-auto'>
                  <h1 className='py-5 uppercase '>Knowledge Cafe</h1>
                  <img src={profile} alt="" />

        </div>
    );
};

export default Header;