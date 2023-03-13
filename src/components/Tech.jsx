import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-10'>
      {technologies.map((technologi) => (
        <div className='w-28 h-28' key={technologi.name}>
          <BallCanvas icon={technologi.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
