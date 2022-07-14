import { useLocation, useNavigate } from 'react-router-dom';
import { pathLabelAssoc } from '@src/appSetup';

export const useHeaderLogic = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pathElements = pathname.slice(1).split('/');
  const pathBase = pathname === '/' ? pathname : pathElements[0];

  return {
    title: pathLabelAssoc[pathBase],
    isBackButton: pathElements.length > 1,
    navBack: () => navigate(-1),
  };
};
