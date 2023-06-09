
import ProgressBar from './ProgressBar';
import './Home.css';

const Home = ({ calculateProgress }) => {

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
        </div>
          <div className="card-body">
          </div>
      </div>
      <ProgressBar progress={calculateProgress()} />
    </div>
  );
};

export default Home;
