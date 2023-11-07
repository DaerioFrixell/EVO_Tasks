// exm. for use React.Portal  

export const SomeComponent = () => {
  return (
    <>
      <button onClick={toggle}>add unit</button>
      {
        isOpen &&
        createPortal(
          <Modal toggle={toggle} title="добавление unit">
            <UnitForm />
          </Modal>,
          document.body
        )
      }
    </>
  );
};