export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    console.log('LOAD', serializedState);
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
    // ignore
  }
};

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const REQUIRED = value => (value ? undefined : '必填');
export const PLEASE_SELECT = value => (value !== 'default' ? undefined : '必填');

