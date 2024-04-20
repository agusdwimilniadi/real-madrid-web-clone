import Jumbotron from '../../molecules/Jumbotron';
import Navbar from '../../molecules/Navbar';
import NextEvent from '../../molecules/NextEvent';
import ScoreBoard from '../../molecules/ScoreBoard';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <ScoreBoard />
      <Jumbotron />
      <NextEvent />
    </div>
  );
};

export default LandingPage;
