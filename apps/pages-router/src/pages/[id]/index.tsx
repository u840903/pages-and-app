import type { GetStaticProps, GetStaticPropsResult } from "next";

interface Props {
  id: string;
}

const IdPage = (props:Props) => {
  return (
    <div>Pages Router ID: {props.id}</div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<GetStaticPropsResult<Props>> => {
  const id = context.params?.id as string;
  return {
    props: {
      id,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
}

export default IdPage;