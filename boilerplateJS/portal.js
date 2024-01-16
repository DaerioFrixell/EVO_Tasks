// exm. for use React.Portal  

export const SomeComponent = () => {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>click it</button>
      {
        isOpen &&
        createPortal(
          <Modal toggle={toggle} title="some title">
            <AnyComponent />
          </Modal>,
          document.body
        )
      }
    </>
  );
};