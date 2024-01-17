import { MDXRemote } from 'next-mdx-remote/rsc';

import Image from 'next/image';

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

let components = {
  Image: RoundedImage,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
