export const INITIAL_MODAL_VALUE = {
  visible: false,
  title: '',
  content: '',
};

export const makeBackdropPressFunc = (modal, setModal) => () => {
  setModal({
    ...modal,
    ...INITIAL_MODAL_VALUE,
  });
};

export const makeShowModalFunc = (modal, setModal) => {
  const showModalFunc = (
    title,
    content,
    callback = () => {
      console.log('callback is not defined');
    },
  ) => {
    setModal({
      ...modal,
      visible: true,
      title,
      content,
    });
    callback();
  };

  return showModalFunc;
};
