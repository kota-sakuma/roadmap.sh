import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class FileSearcher {

  private static final String DEFAULT_PATH = "sample.txt";
  private static final String DEFAULT_TARGET = "Java";

  public static void main(String[] args) {
    Path path = Paths.get(DEFAULT_PATH);
    printMatchingLines(path, DEFAULT_TARGET);
  }

  private static void printMatchingLines(Path path, String target) {
    try (Stream<String> lines = Files.lines(path)) {
      lines
          .filter(line -> line.contains(target))
          .map(line -> "Found: " + line)
          .forEach(System.out::println);
    } catch (IOException e) {
      System.err.println("Error reading file: " + e.getMessage());
    }
  }
}
