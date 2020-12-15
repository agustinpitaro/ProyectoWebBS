import { Producto } from 'src/producto/producto.entity';
import { Factura } from 'src/factura/factura.entity';
import { Usuario } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DETALLE_FACTURA')
export class DetalleFactura {

    @PrimaryGeneratedColumn()
    @ManyToOne(() => Factura, factura => factura.getNroFactura())
    private factura : Factura;

    @PrimaryGeneratedColumn()
    private nro_item: number;

    @PrimaryGeneratedColumn()
    @ManyToOne(() => Producto, producto => producto.getNroProducto())
    private producto : Producto;

   

    public getNroItem():number{
        return this.nro_item;
    }
    
    public setNroItem(nro_item: number){
        this.nro_item = nro_item;
    }

    public getNroProducto():number{
        return this.producto.getNroProducto();
    }
    
    public setNroProducto(nro_producto: number){
        this.producto.setNroProducto(nro_producto);
    }

    public getNroFactura():number{
        return this.factura.getNroFactura();
    }
    
    public setNroFactura(nro_factura: number){
        this.factura.setNroFactura(nro_factura);
    }
}