/* eslint-disable camelcase */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('timestamp with time zone')
    date: Date;

    @Column('uuid')
    // eslint-disable-next-line camelcase
    category_id: string;

    @Column()
    type: string;

    @Column('float')
    value: number;

    @Column()
    description: string;

    @Column('uuid')
    wallet_id: string;
}

export default Transaction;
