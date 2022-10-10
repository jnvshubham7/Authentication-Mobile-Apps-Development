import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <h1>Have an account?</h1>
      <p>Login <a rel="noopener noreferrer" href="/login">here</a></p>
    </div>
  );
};

export default ExploreContainer;
