import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css['Loader']}>
      <ClimbingBoxLoader color="#3676d6" />
    </div>
  );
}