import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wallets')
class Wallet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float')
    total: number;
}

export default Wallet;
