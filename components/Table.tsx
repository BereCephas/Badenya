import React from 'react';

interface Devoir {
  classe: string;
  [key: string]: string[] | string; 
}

const devoirsData: Devoir[] = [
  { classe: '6e', Fr: ['1/3/2024'], Ang: ['2/3/2024'], Hg: ['4/3/2024'], Math: ['3/3/2024'], Svt: ['1/3/2024'] },
  { classe: '5e', Fr: ['1/3/2024'], Ang: ['2/3/2024'], Hg: ['4/3/2024'], Math: ['3/3/2024'], Svt: ['1/3/2024'] },
  { classe: '4e', Fr: ['1/3/2024'], Ang: ['2/3/2024'], Hg: ['4/3/2024'], Math: ['3/3/2024'], Svt: ['1/3/2024'] },
  { classe: '3e', Fr: ['1/3/2024'], Ang: ['2/3/2024'], Hg: ['4/3/2024'], Math: ['3/3/2024'], Svt: ['1/3/2024'] },
 
];


const TableComponent: React.FC<{ devoirs: Devoir[] }> = ({ devoirs }) => {
  return (
    <div className="overflow-x-auto w-[100vw] md h-full flex flex-col justify-center">
      <table className="w-full h-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Classe</th>
            <th className="px-4 py-2">Fr</th>
            <th className="px-4 py-2">Ang</th>
            <th className="px-4 py-2">Hg</th>
            <th className="px-4 py-2">Math</th>
            <th className="px-4 py-2">Svt</th>
            {/* Répétez pour chaque matière */}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {devoirs.map((devoir, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border px-4 py-2">{devoir.classe}</td>
              <td className="border px-4 py-2">{(devoir.Fr as string[]).join(', ')}</td>
              <td className="border px-4 py-2">{(devoir.Ang as string[]).join(', ')}</td>
              <td className="border px-4 py-2">{(devoir.Hg as string[]).join(', ')}</td>
              <td className="border px-4 py-2">{(devoir.Math as string[]).join(', ')}</td>
              <td className="border px-4 py-2">{(devoir.Svt as string[]).join(', ')}</td>
              {/* Répétez pour chaque matière */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const DevoirsChronogramme: React.FC = () => {
  return (
    <div>
      <TableComponent devoirs={devoirsData} />
    </div>
  );
};

export default DevoirsChronogramme;
