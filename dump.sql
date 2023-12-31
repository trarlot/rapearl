-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: rapearl
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `IdAlbum` int(11) NOT NULL AUTO_INCREMENT,
  `IdUser` int(11) NOT NULL,
  `Titre` varchar(255) NOT NULL,
  `Duration` time NOT NULL,
  `Cover` varchar(255) NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`IdAlbum`),
  KEY `IdUser` (`IdUser`),
  CONSTRAINT `IdUser` FOREIGN KEY (`IdUser`) REFERENCES `users` (`IdUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES
(1,55,'Akimbo','33:00:00','http://localhost:3000/assets/covers/500x500.jpg','2023-07-18 17:39:24','2023-07-18 17:39:24'),
(3,56,'UMLA','45:00:00','http://localhost:3000/assets/covers/UMLA.jpg','2023-07-20 13:42:21','2023-07-20 13:42:21');
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `playlist` (
  `IdPlaylist` int(11) NOT NULL AUTO_INCREMENT,
  `PlaylistName` varchar(255) NOT NULL,
  `IdUser` int(11) NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`IdPlaylist`),
  KEY `IdUser` (`IdUser`),
  CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`IdUser`) REFERENCES `users` (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist`
--

LOCK TABLES `playlist` WRITE;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `song` (
  `IdSong` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `IdUser` int(11) NOT NULL,
  `IdPlaylist` int(11) DEFAULT NULL,
  `Duration` time NOT NULL,
  `IdAlbum` int(11) NOT NULL,
  `Style` varchar(255) NOT NULL,
  `Playing` tinyint(1) DEFAULT NULL,
  `Cover` varchar(255) NOT NULL,
  PRIMARY KEY (`IdSong`),
  KEY `IdUser` (`IdUser`),
  KEY `IdAlbum` (`IdAlbum`),
  CONSTRAINT `song_ibfk_1` FOREIGN KEY (`IdPlaylist`) REFERENCES `playlist` (`IdPlaylist`),
  CONSTRAINT `song_ibfk_2` FOREIGN KEY (`IdUser`) REFERENCES `users` (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `IdUser` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL DEFAULT '',
  `LastName` varchar(255) NOT NULL,
  `ArtistName` varchar(255) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Sexe` varchar(255) DEFAULT NULL,
  `Ville` varchar(255) DEFAULT NULL,
  `Artiste` tinyint(1) DEFAULT NULL,
  `Pro` tinyint(1) DEFAULT NULL,
  `Picture` varchar(255) DEFAULT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedOn` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`IdUser`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(55,'Tristan','Arlot','Ziak',NULL,'gfdggdf@hotmail.fr','123',NULL,NULL,NULL,NULL,NULL,'2023-07-19 15:51:47','2023-07-19 15:51:47'),
(56,'Tristan','arlot','Alpha Wann',NULL,'tristan433320@hotmail.fr','123',NULL,NULL,NULL,NULL,NULL,'2023-07-20 13:56:03','2023-07-20 13:56:03'),
(57,'Tristan','Tristan Arlot','Arlot',NULL,'tristan45220@hotmail.fr','$2a$10$uqUsVXpmtKENVOs7k/.Fgu/0oLBEJQIrtX9k5u/Wt790cO1Y5gJkO',NULL,NULL,NULL,NULL,NULL,'2023-10-15 10:57:09','2023-10-15 10:57:09'),
(59,'Tristfgfgan','Tristan Arlot','er rfesr',NULL,'tristan4dfdfdf5220@hotmail.fr','$2a$10$IrflKoXbMfHH4zQPfC5sp.bR7oN0BTj51w8FXTFlfwzhV71z1MUSO',NULL,NULL,NULL,NULL,NULL,'2023-10-16 18:59:27','2023-10-16 18:59:27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-25 23:04:37
