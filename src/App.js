import React, { useState, useEffect } from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import { routesArray } from './router/RouteMisc';
import { findIndex, sleep } from './misc';
import LoadingBackdrop from './components/LoadingBackdrop/LoadingBackdrop';

const App = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setValue(findIndex(location.pathname, routesArray));
  }, [location]);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    await sleep(500);

    setIsLoading(false);
  };

  useEffect(() => {
    const imgs = [
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/about/jack_perry_2+(1).png',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/about/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/about/sebastian-bednarek-G3OgJdctHos-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/blogposts/steven-estes-F5I2QlP8X9w-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/contact/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/home/ostap-senyuk-ytHzhPZb3VE-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/projects/christoph-bengtsson-lissalde-6wGLeVPJLMw-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/projects/jordan-mcqueen-DgEA7saT8FQ-unsplash.jpg',
      'https://s3.us-east-2.amazonaws.com/portfolio-bucket-3.0-29134u89324809184/Logos/white_logo_transparent_background.png',
    ];

    cacheImages(imgs);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      {isLoading ? (
        <LoadingBackdrop backgroundColor='#000' />
      ) : (
        <ThemeProvider theme={theme}>
          <main>
            <NavBar value={value} />
            <Routes />
          </main>
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
