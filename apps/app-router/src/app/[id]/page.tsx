interface Props {
  params: {
    id: string;
  };
}

export default function IdPage(props:Props) {
  return (
   <div>App Router ID: {props.params.id}</div>
  );
}
