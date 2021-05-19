import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Skeleton from 'react-loading-skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image = ({
  src,
  className,
  alt,
  decoding,
  ...rest
}: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [paddingBottom, setPaddingBottom] = React.useState('');

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setPaddingBottom(
      `${(e.currentTarget.naturalHeight * 100) / e.currentTarget.naturalWidth}%`
    );
  };

  return (
    <div style={{ paddingBottom }} className={cn(s.container, className)}>
      {isLoading && <Skeleton style={{ width: '100%', height: '500px' }} />}
      <img src={src} decoding="auto" onLoad={onLoad} {...rest} alt={alt} />
    </div>
  );
};
