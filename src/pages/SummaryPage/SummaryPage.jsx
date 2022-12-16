import React, { useState } from 'react';

export const SummmaryPage = () => {
  /** Property */
  const [checked, setChecked] = useState(false);

  /** Function */

  /** Render */
  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문 상품을 확인했나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};
