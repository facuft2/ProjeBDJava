package logica;

public class palabra {
	
	private categoria Categoria;
	private char letra;
	private String definicion;
	private int codigo;
	private boolean empiezaPor;
	private boolean estadoUso;
	private int cantidadRespondida;
	private int cantidadRespondidaCorrectamente;
	public palabra(categoria categoria, char letra, String definicion, int codigo, boolean empiezaPor,
			boolean estadoUso, int cantidadRespondida, int cantidadRespondidaCorrectamente) {
		super();
		Categoria = categoria;
		this.letra = letra;
		this.definicion = definicion;
		this.codigo = codigo;
		this.empiezaPor = empiezaPor;
		this.estadoUso = estadoUso;
		this.cantidadRespondida = cantidadRespondida;
		this.cantidadRespondidaCorrectamente = cantidadRespondidaCorrectamente;
	}
	public categoria getCategoria() {
		return Categoria;
	}
	public void setCategoria(categoria categoria) {
		Categoria = categoria;
	}
	public char getLetra() {
		return letra;
	}
	public void setLetra(char letra) {
		this.letra = letra;
	}
	public String getDefinicion() {
		return definicion;
	}
	public void setDefinicion(String definicion) {
		this.definicion = definicion;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public boolean isEmpiezaPor() {
		return empiezaPor;
	}
	public void setEmpiezaPor(boolean empiezaPor) {
		this.empiezaPor = empiezaPor;
	}
	public boolean isEstadoUso() {
		return estadoUso;
	}
	public void setEstadoUso(boolean estadoUso) {
		this.estadoUso = estadoUso;
	}
	public int getCantidadRespondida() {
		return cantidadRespondida;
	}
	public void setCantidadRespondida(int cantidadRespondida) {
		this.cantidadRespondida = cantidadRespondida;
	}
	public int getCantidadRespondidaCorrectamente() {
		return cantidadRespondidaCorrectamente;
	}
	public void setCantidadRespondidaCorrectamente(int cantidadRespondidaCorrectamente) {
		this.cantidadRespondidaCorrectamente = cantidadRespondidaCorrectamente;
	}
	
	 

}
