import logo from '../../../assets/logo.png'
import moment from 'moment-timezone';

const Header = () => {
    return (
        <div className='text-center pt-10 space-y-2'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'> {moment().format('dddd, MMMM D, YYYY, ')} </p>
        </div>
    );
};

export default Header;