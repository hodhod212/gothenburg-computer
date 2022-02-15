import { Grid,Paper,styled ,Link} from '@mui/material';
import  Icon  from './Icon';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 

library.add(faInstagram); 

export default function Footer() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
  return (
    <div style={{ minWidth: '100%', bottom: 0 }}>
      <div
        style={{
          display: 'flex',
          minWidth: '80%',
          maxWidth: '80%',
          height: 120,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <Link
                href="https://ecstatic-torvalds-293a2e.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <span>LinkedIn </span>
                <Icon name="linkedin" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link
                href="https://github.com/hodhod212"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <span>Github </span>
                <Icon name="github" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link
                href="http://gothenburg-clothing.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <span>My Website </span>
                <Icon name="web" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Link
                href="https://www.instagram.com/elsparkcyklar"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <span>Instagram </span>
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  style={{ color: 'red' }}
                />
              </Link>
            </Item>
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <Item>
              &copy;
              {`${new Date().getFullYear()} Ali Ezadkhaha. All rights reserved.`}
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
