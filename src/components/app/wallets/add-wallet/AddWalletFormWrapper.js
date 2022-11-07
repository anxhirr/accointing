import React from 'react';
import styles from './AddWalletFormWrapper.module.css';

import { useDispatch, useSelector } from 'react-redux';

import Btn from '../../../../custom/Btn';
import SelectWallet from './SelectWallet';
import ImportTransactions from './ImportTransactions';
import AddWalletData from './AddWalletData';
import { addWalletActions } from '../../../../store/add-wallet-slice';

const STEPS = [<SelectWallet />, <ImportTransactions />, <AddWalletData />];

function AddWalletFormWrapper() {
  const dispatch = useDispatch();
  const { selectedWalletImg } = useSelector((state) => state.wallet);
  const { currentStepIndex } = useSelector((state) => state.addWallet);

  const currentStep = STEPS[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isSecondStep = currentStepIndex === 1;
  const isLastStep = currentStepIndex === STEPS.length - 1;

  const closeModal = () => {
    dispatch(addWalletActions.setShowModal(false));
  };

  const handlePrevBtnClick = () => {
    if (isFirstStep) {
      closeModal();
      return;
    }
    dispatch(addWalletActions.prevStep());
  };

  const handleNextBtnClick = () => {
    if (isLastStep) {
      closeModal();
      return;
    }
    dispatch(addWalletActions.nextStep());
  };

  return (
    <>
      <div onClick={closeModal} className={styles.container}>
        <div onClick={(e) => e.stopPropagation()} className={styles.content}>
          <div className={styles.main}>
            <div className={styles.header}>
              {!isFirstStep && <img src={selectedWalletImg} />}
              <h2>
                {isFirstStep && 'Select Your Wallet'}
                {isSecondStep && 'How do you want to import your transactions?'}
                {isLastStep && 'Add data to your wallet'}
              </h2>
            </div>
            {currentStep}
          </div>
          {isSecondStep && (
            <div className={styles.btns}>
              <Btn
                classN={styles.whiteBtn}
                onClick={handlePrevBtnClick}
                text='Go back'
              />
              <Btn onClick={handleNextBtnClick} text={'Continue'} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddWalletFormWrapper;
