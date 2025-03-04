import { CellOptions } from '../types';

interface CellProps {
  type: CellOptions;
}

function Cell({ type }: CellProps) {
  return <div className={`cell ${type}`} />;
}

export default Cell;
