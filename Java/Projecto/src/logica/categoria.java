package logica;

import java.util.ArrayList;

public class categoria {

	private ArrayList<palabra> Palabras = new ArrayList<palabra>();
	private String nombre;
	public categoria(ArrayList<palabra> palabras, String nombre) {
		super();
		Palabras = palabras;
		this.nombre = nombre;
	}
	public ArrayList<palabra> getPalabras() {
		return Palabras;
	}
	public void setPalabras(ArrayList<palabra> palabras) {
		Palabras = palabras;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
}
