import Jumbotron from '../../molecules/Jumbotron';
import Navbar from '../../molecules/Navbar';
import News from '../../molecules/News';
import NextEvent from '../../molecules/NextEvent';
import ScoreBoard from '../../molecules/ScoreBoard';
import TrackRecord from '../../molecules/TrackRecord';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <ScoreBoard />
      <Jumbotron />
      <NextEvent />
      <News />
      <TrackRecord />
    </div>
  );
};

export default LandingPage;
