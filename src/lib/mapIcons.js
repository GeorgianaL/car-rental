import carDoor from '../../public/assets/car-door-white.png'
import carSeat from '../../public/assets/car-seat-white.png'
import gearboxWhite from '../../public/assets/gearbox-white.png';
import euroWhite from '../../public/assets/euro-sign-white.png';

export const mapIcons = (featureName) => {
   switch (featureName) {
    case 'seats':
      return carSeat;
    case 'doors':
      return carDoor;
    case 'gearbox':
      return gearboxWhite;
    case 'euro-white':
      return euroWhite;
    default:
      return carDoor;
  };
};
