import { makeStyles, useTheme } from '@material-ui/core/styles';
import colors from './colors';

export const mainBar = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const switchButton = makeStyles({
  switchBase: {
    color: colors[3],
    '&$checked': {
      color: colors[0],
    },
    '&$checked + $track': {
      backgroundColor: colors[5],
    },
  },
  checked: {},
  track: {},
});
