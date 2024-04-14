import Jumbotron from '../../molecules/Jumbotron';
import Navbar from '../../molecules/Navbar';
import ScoreBoard from '../../molecules/ScoreBoard';

const LandingPage = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <ScoreBoard />
      <Jumbotron />
    </div>
  );
};

export default LandingPage;
