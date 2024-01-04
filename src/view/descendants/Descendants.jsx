import React from 'react'
import { useSelector } from 'react-redux'

export default function Descendants() {

    const greatGrandChilds =[]
    let grandChilds = 0
    let totalSocios = 0
    let porcent = 0
    
    const table = useSelector(state=>state.descendentsReducer.descendents)


    for (let i = 0; i < table.length; i++) {
        let countGreatGrandChilds = 0
        for (let j = 0; j < table[i].grandChilds.length; j++) {
            countGreatGrandChilds=countGreatGrandChilds+(10-table[i].grandChilds[j].remainingReferrals)
        }
        grandChilds=grandChilds+table[i].grandChilds.length
        greatGrandChilds.push(countGreatGrandChilds)
    }
    
    let totalGreatGrandChilds = greatGrandChilds.reduce((a, b) => a + b, 0);
    totalSocios = table.length+grandChilds+totalGreatGrandChilds
    porcent = (totalSocios/1110)*100
    return (
        <div>
            <table className="default">
                <tr>
                    <th scope="row"></th>
                    <th>Socios invitados</th>
                    <th>III Nivel</th>
                    <th>IV Nivel</th>
                </tr>
                {table?.map((type, index)=> <tr>
                                        <th scope="row">{index+1}</th>
                                        <td value={type.id} key={type.id}>{type.child.username}</td>
                                        <td value={type.id} key={type.id}>{type.grandChilds.length}</td>
                                        <td value={type.id} key={type.id}>{greatGrandChilds[index]}</td>
                </tr>)}
                <tr>
                    <td>         </td>
                    <th></th>
                    <td>{grandChilds}</td>
                    <td>{totalGreatGrandChilds}</td>
                </tr>
                <tr>
                    <th></th>
                    <th>Total socios en mi RPB</th>
                    <td>{totalSocios}</td>
                    <td>{Number.parseFloat(porcent).toFixed(2)}%</td>
                </tr>
            </table>
        </div>
    )
}