import React from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button } from '..';
import { ROUTES } from '../../constants/routes';
import { FirebaseContext } from '../../context/firebase';
import { useAppSelector } from '../../hooks';
import { selectUser } from '../../redux/slices/userSlice';
import { Menu } from '../menu';
import s from './style.module.scss';

export const Navigation = () => {
  const [anchorElem, setAnchorElem] =
    React.useState<HTMLAnchorElement | null>(null);
  const { pathname } = useLocation();
  const { firebase } = React.useContext(FirebaseContext);
  const history = useHistory();
  const user = useAppSelector(selectUser);

  const onSignOut = async () => {
    try {
      await firebase.auth().signOut();
      history.push(ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!anchorElem) setAnchorElem(e.currentTarget);
    else setAnchorElem(null);
  };

  const onClose = () => {
    setAnchorElem(null);
  };

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {user ? (
          <>
            <li>
              <Link className={s.link} to={`${ROUTES.DASHBOARD}`}>
                {pathname === `${ROUTES.DASHBOARD}` ? (
                  <AiFillHome />
                ) : (
                  <AiOutlineHome />
                )}
              </Link>
            </li>
            <li>
              <Link
                onClick={handleOpenUserMenu}
                className={s.link}
                to={`/p/${user?.displayName}`}
              >
                {pathname === `/p/${user?.displayName}` || anchorElem ? (
                  <FaUserCircle />
                ) : (
                  <FaRegUserCircle />
                )}
              </Link>
              <Menu
                anchorElem={anchorElem}
                onClose={onClose}
                visible={Boolean(anchorElem)}
                className={s.sublist}
              >
                <ul>
                  <li>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      onClick={onSignOut}
                    >
                      Sign Out
                    </Button>
                  </li>
                </ul>
              </Menu>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={`${ROUTES.LOGIN}`}>
                <Button>Sign in</Button>
              </Link>
            </li>
            <li>
              <Link to={`${ROUTES.SIGN_UP}`}>
                <Button variant="outlined">Sign up</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
