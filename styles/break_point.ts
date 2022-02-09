import MEDIA from '@constants/media';

const BP = {
    PHONE_UP: `@media (min-width: ${MEDIA.PHONE}px)`,
    PHONE_DOWN: `@media (max-width: ${MEDIA.PHONE}px)`,
    TABLET_UP: `@media (min-width: ${MEDIA.TABLET}px)`,
    TABLET_DOWN: `@media (max-width: ${MEDIA.TABLET}px)`,
    DESKTOP_UP: `@media (min-width: ${MEDIA.DESKTOP}px)`,
    DESKTOP_DOWN: `@media (max-width: ${MEDIA.DESKTOP}px)`,
};

export default BP;
