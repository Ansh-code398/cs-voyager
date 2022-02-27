import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Link from 'next/link';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({latestPost}) {
  const [open, setOpen] = React.useState(true);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setOpen(false);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, [open])
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Check All <Link href="/editions"><a className="underline">Editions</a></Link> and <Link href={`/post/${latestPost.slug}`}><a className="underline">Latest Edition</a></Link>.
        </Alert>
      </Snackbar>
    </Stack>
  );
}