import Navbar from '../../molecules/Navbar';
import ScoreBoard from '../../molecules/ScoreBoard';

const LandingPage = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <ScoreBoard />
    </div>
  );
};

export default LandingPage;
